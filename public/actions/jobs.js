//alert("hallo jobs");
const BASE_URL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?"
var country = $("#selectCountry").find(":selected").text();
var affinity = $("#selectAffinity").find(":selected").text();
$(function() {
    //getJobs("php", "usa");
    $("#findJob").click(function(e) {
        e.preventDefault();
        var country = $("#selectCountry").find(":selected").text();
        var affinity = $("#selectAffinity").find(":selected").text();
        console.log(affinity, country)
        getJobs(affinity, country)
    });
});

function getJobs(type, location) {
    axios.get(`${BASE_URL}description=${type}&location=${location}`)
        .then((resp) => {
            //new
            $("#jobsTable").empty()

            //new
            resp.data.forEach((job) => {
                printJob(job)
            });
            console.log(resp)
        })
        .catch((error) => {
            console.log(error)
        })
}
//print jobs
//container for view jobs.ejs
function printJob(job) {
    var content = `
    <table class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col location_label">Location</th>
                        <th scope="col company_label">Company</th>
                        <th scope="col title_label">Title</th>
                        <th scope="col type_label">Type</th>
                        <th scope="col description_label">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="location">${job.location}</td>
                        <td class="company">${job.company}</td>
                        <td class="company">${job.title}</td>
                        <td class="type">${job.type}</td>
                        <td class="description">${job.description}</td>
                    </tr>

                </tbody>
            </table>
    `;
    $('#jobsTable').append(content);
}