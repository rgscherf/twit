(ns frontend.user
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(defn new-user [state user]
  (go (let [user-url (str "/get_user/" user)
            response (<! (http/get user-url))]
        (if (= (:status response) 200)
          (reset! state {:error false
                         :user (:body response)})
          (reset! state {:error true
                         :user (:user @state)})))))
