(ns frontend.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(def state (r/atom {}))
(defn new-user [user]
  (go (let [user-url (str "/get_user/" user)
            response (<! (http/get user-url))]
        (if (= 200 (:status response))
          (reset! state {:error false
                         :user (:body response)})
          (reset! state {:error true
                         :user nil})))))

(defn sidebar [{:keys [avatar_url name html_url login public_repos]} user]
  [:div {:class "sideBar shadow"}
    [:img {:src avatar_url}]
    [:div
      [:span {:id "userName"} name]]
    [:div
      [:span {:id "userUrl"}
        [:a {:href html_url} (str login " - " public_repos " public repos")]]]])

(defn twitcard [{:keys [message commit_url sha repo_url repo_name timestamp_pretty]} commit]
  [:div {:class "twitCard shadow"}
    [:div {:class "twitCardMessage"} message]
    [:div
      [:a {:href commit_url} sha]
      [:span " to "]
      [:a {:href repo_url} repo_name]]
    [:div timestamp_pretty]])

(defn timeline [commits]
  [:div {:class "timeline"}
    (for [card commits]
      [twitcard card])])

(defn content-container [user]
  [:div {:class "contentContainer"}
    [sidebar user]
    [timeline (:commits user)]])


(defn page-root [user]
  (new-user user)
  (fn []
    [content-container (:user @state)]))

(r/render [page-root "rgscherf"]
  (js/document.getElementById "app"))
