/**
* JetBrains Space Automation
* This Kotlin-script file lets you automate build activities
* For more info, see https://www.jetbrains.com/help/space/automation.html
*/

job("Build and push Docker") {
    host("Build artifacts and a Docker image") {
      

        dockerBuildPush {
            // Docker context, by default, project root
            // path to Dockerfile relative to project root
            // if 'file' is not specified, Docker will look for it in 'context'/Dockerfile
             file = "Dockerfile"
         

            val spaceRepo = "nefdtco.registry.jetbrains.space/p/voortrekkers/docker/voortrekkerwebsite"
            // image tags for 'docker push'
            tags {
                +"$spaceRepo:1.0.${"$"}JB_SPACE_EXECUTION_NUMBER"
                +"$spaceRepo:latest"
            }
        }
    }
}


job("Deploy") {
    // for optimisation puporse: do not run any container, put script just on "host": https://www.jetbrains.com/help/space/jobs-and-actions.html#main-features-of-jobs-and-steps
    host("SSH to Production") {
        shellScript {
            content = """
                ssh root@65.109.168.47
				expect "password:"
				sleep 1
				send "Eddie532411?"
				ls
            """
        }
    }
}
    
