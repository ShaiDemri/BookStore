echo 'Start Backend'

cd Backend
source ./exec.sh &

sleep 3s
echo 'Start Frontend'
cd ../Frontend
npm install
#execute react
npm start
cd ../