import React from 'react';
import CreateArticle from '../CreateArticle';

const Createarticles=new CreateArticle();


it('get from mongoDB',()=>{
Createarticles.componentDidMount()
expect(Createarticles.articles).tobe(this.articles)
})