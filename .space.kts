/**
* JetBrains Space Automation
* This Kotlin-script file lets you automate build activities
* For more info, see https://www.jetbrains.com/help/space/automation.html
*/

job("Hello World!") {
    container(displayName = "Say Hello", image = "hello-world")
}


job("Build and push Docker") {
    host("Build artifacts and a Docker image") {
        // generate artifacts required for the image
        shellScript {
            content = """
                ./generateArtifacts.sh
            """
        }

        dockerBuildPush {
            context = "docker"
            labels["vendor"] = "mycompany"
            val spaceRepo = "docker build -t nefdtco.registry.jetbrains.space/p/voortrekkers/docker/voortrekkersWebsite"
            // image tags for 'docker push'
            tags {
                +"$spaceRepo:1.0.${"$"}JB_SPACE_EXECUTION_NUMBER"
                +"$spaceRepo:latest"
            }
        }
    }
}
