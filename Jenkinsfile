pipeline {
  agent any

  stages {
    stage('Initialize') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'gulp test'
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
