let store = {};
const RECOMMENDATIONS_TO_SHOW = 4;
const RECOMMENDATIONS_FETCH_AMOUT = 100;

const getRecommendations = () => {
    fetch('http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&count=' + RECOMMENDATIONS_FETCH_AMOUT + '&source.type=video&source.id=214321562187&source.url=http://www.site.com/videos/214321562187.html'
    )
    .then(response =>  {
	return response.json();
    }).then(data => {
        store.recommendations = data.list;
        store.currentRecommendationIndex = 0;
        displayEmptyWidget();
        displayRecommendations();
    }).catch(err => {
        console.warn('Something went wrong.', err);
    });
}

const openLink = (url, origin) => {
    switch (origin) {
        case "sponsored": window.open(url); break;
        case "organic": window.open(url,"_self"); break;
        default: break;
    }
}

const showMoreRecommendations = () => {
    if (store.currentRecommendationIndex + RECOMMENDATIONS_TO_SHOW < RECOMMENDATIONS_FETCH_AMOUT) {
        store.currentRecommendationIndex += RECOMMENDATIONS_TO_SHOW;
        displayRecommendations();
    }
}

const displayRecommendations = () => {
    document.querySelector(".recommendationsContainer").innerHTML += 
        store.recommendations.slice(store.currentRecommendationIndex, store.currentRecommendationIndex + RECOMMENDATIONS_TO_SHOW)
            .map(recommendation => {
                return '<div class="recommendationItem" onclick="openLink(`' + recommendation.url + '`, `' + recommendation.origin + '`)">' + 
                        '<img src="' + recommendation.thumbnail[0].url + '" class="recommendationImg" />' +
                        '<p>' + recommendation.name + '</p>' +
                        '<p>' + recommendation.branding + '</p>' +
                    '</div>';
            }).join("");
}

const displayEmptyWidget = () => {
    document.body.innerHTML +=
        '<div class="widget">' +
            '<div class="recommendationsContainer"></div>' +
            '<button onclick="showMoreRecommendations()">show more</button>' +
        '</div>'
}

getRecommendations();