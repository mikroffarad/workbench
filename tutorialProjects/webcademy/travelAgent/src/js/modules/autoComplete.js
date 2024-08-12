import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from "./../helpers/countryList";

const autoCompleteJS = new autoComplete({
    selector: "#autoCompleteCountry",
    placeHolder: "e.g Bali, Indonesia",
    data: {
        src: countryList,
        cache: true,
    },
    resultItem: {
        highlight: true,
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
            }
        }
    },
    resultsList: {
        maxResults: 20,
    },
    searchEngine: "strict",
});

export default autoCompleteJS