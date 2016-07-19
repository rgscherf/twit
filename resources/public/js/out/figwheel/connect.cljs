(ns figwheel.connect (:require [frontend.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "production", :websocket-url "ws://localhost:3449/figwheel-ws"})

