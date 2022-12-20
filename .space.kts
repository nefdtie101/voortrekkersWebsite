job("Build and push Docker") {
    host("Build artifacts and a Docker image") {
        // generate artifacts required for the image
        shellScript {
            content = """
                ./generateArtifacts.sh
            """
        }

        dockerBuildPush {
            // Docker context, by default, project root
            context = "docker"
            // path to Dockerfile relative to project root
            // if 'file' is not specified, Docker will look for it in 'context'/Dockerfile
            file = "/Dockerfile"
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