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


job("Deploy App To Server") {
     startOn {
        gitPush { enabled = false }
         }
     host("Run echo") {
        shellScript {
            content = """
              spawn ssh root@65.109.168.47
				expect "password:"
				sleep 1
				send "Eddie532411?"
                docker pull nefdtco.registry.jetbrains.space/p/voortrekkers/docker/voortrekkerwebsite:latest
                docker run -p 3000:3000 voortrekkerwebsite:latest
            """
        }
    }
 }

    
