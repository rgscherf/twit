(defproject twit "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://github.com/rgscherf/twit"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [clj-http "2.2.0"]
                 [compojure "1.5.1"]
                 [cheshire "5.4.0"]
                 [spyscope "0.1.5"]
                 [ring/ring-defaults "0.2.1"]]
  :plugins [[lein-beanstalk "0.2.7"]
            [lein-ring "0.9.7"]]
  :ring {:handler twit.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}})
