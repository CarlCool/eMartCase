pipeline {
   agent any

   stages {
      stage('Build') {
         steps {
            //git 'https://github.com/CarlCool/eMartCase.git'
            bat '''
                   CD eMartSpringBoot
                   CD emart-zuul
                   mvn -Dmaven.test.failure.ignore=true clean package
                '''
         }

         post {
            // If Maven was able to run the tests, even if some of the test
            // failed, record the test results and archive the jar file.
            success {
               //junit '**/target/surefire-reports/TEST-*.xml'
               archiveArtifacts 'target/*.jar'
            }
         }
         
      }
      stage('Deploy') {
         steps {
            bat '''
                 CD eMartSpringBoot
                 CD emart-user
                 docker build -t micro-service-emart-zuul .
                 
            '''
         }

         post {
            // If Maven was able to run the tests, even if some of the test
            // failed, record the test results and archive the jar file.
            success {
               //junit '**/target/surefire-reports/TEST-*.xml'
               bat 'docker run -d -p 8085:8085 micro-service-emart-zuul'
            }
         }
      }
      
   }
}
