import results from '../data/ResultsData'

const ResultsApi = {
    getAll: function () {
        return results;
    },
    getAllExcludeGender: function (excludedGender) {
        return results.filter(function (result) {
            return result.gender !== excludedGender;
        });
    },
    getAllExcludeGenderAndExcludeNoImages: function (excludedGender) {
        return results.filter(function (result) {
            return (result.gender !== excludedGender && result.imageURL !== "");
        });
    }
}

export default ResultsApi;