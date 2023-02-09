rsync -e "ssh -i /Users/baisongzhang/Desktop/demo.pem" -av --exclude={'dist','node_modules'} ./ ubuntu@13.231.222.121:/home/ubuntu/Code/
