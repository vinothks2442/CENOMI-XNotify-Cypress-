pipeline {

    agent any

    tools {
        nodejs 'NodeJS22'
    }

    stages {

        stage('Install Dependencies') {

            steps {

                bat 'npm install'

            }

        }

        stage('Verify Cypress') {

            steps {

                bat 'npx cypress --version'

            }

        }

        stage('Run Cypress Tests') {

            steps {

                bat 'npx cypress run'

            }

        }

    }
}