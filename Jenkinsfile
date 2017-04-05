pipeline {
  agent {
    dockerfile true
  }

  stages {
    stage('Unit Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Convergence Testing') {
      steps {
        parallel (
          firefox: {
            echo "Firefox Testing"
          }, 
          Chrome: {
            echo "Chrome Testing"
          }, 
          IE: {
            echo "IE Testing"
          }, 
          Mobile: {
            echo "Mobile Testing"
          }
        )
      }
    }
    stage('Build') {
      steps {
        sh 'gulp package-app'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying...'
      }
    }
  } 
}
