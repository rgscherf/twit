(ns figwheel.connect (:require [frontend.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "fig", :websocket-url "ws://localhost:3449/figwheel-ws"})

