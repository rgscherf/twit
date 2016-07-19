(ns twit.handler
  (:require [compojure.core :refer :all]
            [cheshire.core :as c]
            [clojure.java.io :as io]
            [twit.get-user :refer [assemble-user-map]]
            [compojure.route :as route]
            [ring.util.response :as resp]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(defn user-route [user]
  ; error handling is in assemble-user-map
  ; which returns nil on any error
  (if-let [user-map (-> user assemble-user-map)]
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (c/generate-string user-map)}
    {:status 204 ; 'no content'
     :headers {}}))


(defroutes app-routes
  (GET "/get_user/:user" [user] (user-route user))
  (GET  "/" [] (io/resource "public/index.html"))
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))
