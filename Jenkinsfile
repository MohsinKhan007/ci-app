pipeline {
  agent {
    node {
      label 'njj'
    }

  }
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/MohsinKhan007/ci-app', branch: 'dev')
      }
    }

  }
}