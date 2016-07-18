(ns twit.handler
  (:require [compojure.core :refer :all]
            [twit.get-user :refer [basic-user-info]]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(defroutes app-routes
  (GET "/test" [] (basic-user-info "rgscherf"))
  (GET "/" [] "Hello World")
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))
