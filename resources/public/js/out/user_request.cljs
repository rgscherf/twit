(ns user-request
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(defn new-user [user]
  (go (let [user-url (str "/get_user/" user)
            response (<! (http/get user-url))]
        (if (= (:status response) 200)
          (reset! state {:error false
                         :user (:body response)})
          (reset! state {:error true
                         :user (:user @state)})))))