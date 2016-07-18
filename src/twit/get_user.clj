(ns twit.get-user
  (:require [clj-http.client :as http]
            [cheshire.core :as c]))

(defn user-url [user] (str "https://api.github.com/users/" user))
(defn commit-url [user] (str "https://api.github.com/" user "/events"))
(def api-options {:headers {"Authorization" "token 68622003dbbabc59e105f357be2390c3ab418087"
                            "User-Agent" "rgscherf/cv2"}})

(defn get-response
  "Get response from API. Return string body."
  [url-string]
  (let [response (http/get url-string api-options)]
    (if (= (:status response) 200)
      (:body response)
      nil)))

(defn parse-response
  "convert string body into map"
  [resp-body]
  (if (nil? resp-body)
    nil
    (c/parse-string resp-body true)))

(defn make-response-map
  "convenience function; url string -> response map"
  [url]
  (-> url
      get-response
      parse-response))

(defn basic-user-info
  "github user name-> map of relevant user fields"
  [user-string]
  (make-response-map (user-url user-string)))

(basic-user-info "hello")
(basic-user-info "rgscherf")
