(ns twit.handler
  (:require [compojure.core :refer :all]
            [cheshire.core :as c]
            [clojure.java.io :as io]
            [twit.get-user :refer [assemble-user-map]]
            [compojure.route :as route]
            [ring.util.response :as resp]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(defroutes app-routes
  (GET "/get_user/:user" [user]
    (try
      (let [user-map (-> user
                         assemble-user-map
                         c/generate-string)]
        {:status 200
         :headers {"Content-Type" "application/json"}
         :body user-map})
      (catch clojure.lang.ExeptionInfo e
        {:status 404
         :headers {}
         :body {e}})))
         
    ; (if-let [user-map (-> user
    ;                       assemble-user-map
    ;                       c/generate-string)]
    ;   {:status 200
    ;    :headers {"Content-Type" "application/json"}
    ;    :body user-map}
    ;   {:status 404
    ;    :headers {}}))

  (GET  "/" [] (io/resource "public/index.html"))

  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))
