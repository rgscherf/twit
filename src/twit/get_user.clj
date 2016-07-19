(ns twit.get-user
  (:require [clj-http.client :as http]
            [clj-time.core :as t]
            [clj-time.format :as formatter]
            [cheshire.core :as c]))

(defn user-url [user] (str "https://api.github.com/users/" user))
(defn commit-url [user] (str "https://api.github.com/users/" user "/events"))
(def api-options {:headers {"Authorization" "token 68622003dbbabc59e105f357be2390c3ab418087"
                            "User-Agent" "rgscherf/twit"}})

(defn get-response
  "Get response from API. Returns string body"
  [url-string]
  (let [response (http/get url-string api-options)]
    (if (= (:status response) 200)
      (:body response)
      nil)))

(defn parse-response
  "Convert string body into map"
  [resp-body]
  (if (nil? resp-body)
    nil
    (c/parse-string resp-body true)))

(defn make-response-map
  "Convenience function: URL string -> response map."
  [url]
  (-> url
      get-response
      parse-response))

(defn basic-user-info
  "Github user name -> map of relevant user fields"
  [user-string]
  (let [user (make-response-map (user-url user-string))
        {:keys [avatar_url html_url login name public_repos]} user]
    {:avatar_url avatar_url
     :html_url html_url
     :login login
     :name name
     :public_repos public_repos}))

(defn shape-single-commit
  "Pull relevant fields from map of single commit"
  [c]
  (let [time-obj (-> (:timestamp_raw c)
                     (formatter/parse)
                     (t/to-time-zone (t/time-zone-for-offset -5)))
        pretty-time (formatter/unparse (formatter/formatter "h:mma MMMM dd") time-obj)
        repo-name (first (re-find #"(?<=repos/)(.*)(?=/commits)" (:url c)))
        commit-url (str
                     "https://github.com/"
                     repo-name
                     "/commit/"
                     (:sha c))
        {:keys [message timestamp_raw]} c]
    {:message message
     :repo_name repo-name
     :repo_url (str "https://github.com/" repo-name)
     :commit_url commit-url
     :sha (apply str (take 7 (:sha c)))
     :timestamp_pretty pretty-time
     :timestamp_raw timestamp_raw}))

(defn make-commit-map
  "Github user name -> sorted list of commits"
  [user]
  (->> (make-response-map (commit-url user))
       (filter #(= (:type %) "PushEvent"))
       ; can't return literal vectors from anonymous function calls,
       ; so you need the vector function. The more you know!
       (map #(vector (get-in % [:created_at]) (get-in % [:payload :commits])))
       ; previous function returned [timestamp [commits]] so
       ; we use inner map to assoc timestamp to each commit
       (map (fn [[tim xs]]
              (map (fn [x] (assoc x :timestamp_raw tim)) xs)))
       (flatten)
       (map shape-single-commit)
       (sort-by :timestamp_raw)
       (reverse)))

(defn add-commits
  "Intermediary function to assoc commits to user map"
  [user-map]
  (if (nil? user-map)
    nil
    (assoc user-map :commits (make-commit-map (:login user-map)))))

(defn assemble-user-map
  "Github user name -> user + commits map"
  [user-name]
  (try
    (-> user-name
        basic-user-info
        add-commits)
    (catch Exception e
      nil)))
