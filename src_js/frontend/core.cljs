(ns frontend.core
  (:require [reagent.core :as r]
            [frontend.user :refer [new-user]]
            [frontend.component.sidebar :refer [sidebar]]
            [frontend.component.timeline :refer [timeline]]
            [frontend.component.topbox :refer [topbox]]))

(def state (r/atom {}))

(defn content-container [user]
  [:div.contentContainer
    [sidebar user]
    [timeline (:commits user)]])

(defn page-root [user]
  (new-user state user)
  (fn []
    [:div
      [topbox state] ; topbox calls new-user, which derefs state
      [content-container (:user @state)]]))

(r/render [page-root "rgscherf"]
  (js/document.getElementById "app"))
  
