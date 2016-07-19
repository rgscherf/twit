(ns frontend.component.timeline)

(defn twitcard [{:keys [message commit_url sha repo_url repo_name timestamp_pretty]} commit]
  [:div.twitCard.shadow
    [:div.twitCardMessage message]
    [:div
      [:a {:href commit_url} sha]
      [:span " to "]
      [:a {:href repo_url} repo_name]]
    [:div timestamp_pretty]])

(defn timeline [commits]
  [:div.timeline
    (for [card commits]
      ^{:key (:sha card)} [twitcard card])])
