
//Wire up event event handlers
document.addEventListener("DOMContentLoaded", function (event) {
  console.log(CONSTANTS.isLoggedIn);
  console.log(AsanaGateway.getWorkspaces());
});