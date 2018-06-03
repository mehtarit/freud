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
    getAllMockFlow: function (excludedGender) {
        return results.filter(function (result) {
            return (result.gender !== excludedGender && result.imageURL !== "" && result.ageRange !== "under18");
        });
    }
}

export default ResultsApi;