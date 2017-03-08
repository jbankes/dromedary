pipeline {
  agent any

  stages {
    stage('Test') {
      steps {
        sh 'npm test'
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
