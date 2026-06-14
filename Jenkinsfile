pipeline {

    agent any

    tools {
        nodejs 'NodeJS22'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Node & NPM Version') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Verify Cypress Installation') {
            steps {
                bat 'npx cypress verify'
                bat 'npx cypress info'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run --browser chrome'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**/*', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/videos/**/*', allowEmptyArchive: true
        }

        success {
            echo 'Cypress Execution Completed Successfully'
        }

        failure {
            echo 'Cypress Execution Failed'
        }
    }
}