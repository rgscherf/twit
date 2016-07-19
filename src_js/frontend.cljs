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
                         :user (if (:user @state)
                                 (:user @state)
                                 nil)})))))

(defn sidebar [{:keys [avatar_url name html_url login public_repos]} user]
  [:div.sideBar.shadow
    [:img {:src avatar_url}]
    [:div
      [:span#userName name]]
    [:div
      [:span#userUrl
        [:a {:href html_url} (str login " - " public_repos " public repos")]]]])

(defn twitcard [{:keys [message commit_url sha repo_url repo_name timestamp_pretty]} commit]
  [:div.twitCard.shadow
    [:div.twitCardMessage message]
    [:div
      [:a {:href commit_url} sha]
      [:span " to "]
      [:a {:href repo_url} repo_name]]
    [:div timestamp_pretty]])

(defn timeline [commits]
  [:div.timeline
    (for [card commits]
      ^{:key (:sha card)} [twitcard card])])

(defn content-container [user]
  [:div.contentContainer
    [sidebar user]
    [timeline (:commits user)]])

(defn logo-area []
  [:div
    [:div.titleBox
      [:div#logo "Twit"]
      [:div#definition
        [:div
          [:i "V. to taunt or ridicule"]]
        [:div
          [:i "with reference to anything embarrassing"]]]]])

(defn search-area [state-map]
  [:div.searchContainer
    [:input {:type "text"
             :placeholder "Find Github user to twit"
             :class "mainSearch"
             :on-key-down #(if (= 13 (.-keyCode %)) ; reagent doesn't accept .-key ??
                             (new-user (-> % .-target .-value)))}] ; update state with val
    [:div.searchError
      (if (:error state-map)
        "Could not find that Github user!"
        "")]])

(defn topbox [state-map]
  [:div.searchBox.shadow
    [logo-area]
    [search-area]])

(defn page-root [user]
  (new-user user)
  (fn []
    [:div
      [topbox @state]
      [content-container (:user @state)]]))

(r/render [page-root "rgscherf"]
  (js/document.getElementById "app"))
