(ns frontend.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(def state (r/atom {}))

(defn new-user [user]
  (go (let [user-url (str "/get_user/" user)
            response (<! (http/get user-url))]
        (reset! state (:body response)))))

(defn page-root [user]
  (new-user user)
  (fn []
    [:div (str "Hi, " (:login @state))]))

(r/render [page-root "rgscherf"]
  (js/document.getElementById "app"))
