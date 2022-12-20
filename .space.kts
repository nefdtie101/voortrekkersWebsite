/**
* JetBrains Space Automation
* This Kotlin-script file lets you automate build activities
* For more info, see https://www.jetbrains.com/help/space/automation.html
*/

job("Build and push Docker") {
    host("Build artifacts and a Docker image") {
        dockerBuildPush {
            context = "docker"
            labels["vendor"] = "mycompany"
            val spaceRepo = "nefdtco.registry.jetbrains.space/p/voortrekkers/docker/voortrekkersWebsite"
            // image tags for 'docker push'
            tags {
                +"$spaceRepo:1.0.${"$"}JB_SPACE_EXECUTION_NUMBER"
                +"$spaceRepo:latest"
            }
        }
    }
}
