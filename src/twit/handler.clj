(ns twit.handler
  (:require [compojure.core :refer :all]
            [twit.get-user :refer :all]
            [compojure.route :as route]
            [cheshire.core :as c]
            [ring.util.response :as resp]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(defroutes app-routes
  (GET "/get_user/:user" [user]
    (if-let [user-map] (-> user
                           assemble-user-map
                           c/generate-string)
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body user-map}
      {:status 404
       :headers {}}))

  (GET "/" [] "Hello World")
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))
