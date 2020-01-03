FROM mhart/alpine-node:12
 
WORKDIR .

COPY . .

EXPOSE 3000

RUN yarn
RUN yarn build
CMD ["yarn", "start"]