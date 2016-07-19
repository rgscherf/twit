(ns frontend.component.sidebar)

(defn sidebar [{:keys [avatar_url name html_url login public_repos]} user]
  [:div.sideBar.shadow
    [:img {:src avatar_url}]
    [:div
      [:span#userName name]]
    [:div
      [:span#userUrl
        [:a {:href html_url} (str login " - " public_repos " public repos")]]]])
