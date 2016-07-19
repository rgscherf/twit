(ns component.topbox
  (:require [user-request :refer [new-user]]))

(defn logo-area []
  [:div
    [:div.titleBox
      [:div#logo "Twit"]
      [:div#definition
        [:div
          [:i "V. to taunt or ridicule"]]
        [:div
          [:i "with reference to anything embarrassing"]]]]])

(defn search-area [state-map]
  [:div.searchContainer
    [:input {:type "text"
             :placeholder "Find Github user to twit"
             :class "mainSearch"
             :on-key-down #(if (= 13 (.-keyCode %)) ; reagent doesn't accept .-key ??
                             (new-user (-> % .-target .-value)))}] ; update state with val
    [:div.searchError
      (if (:error state-map)
        "Could not find that Github user!"
        "")]])

(defn topbox [state-map]
  [:div.searchBox.shadow
    [logo-area]
    [search-area state-map]])
