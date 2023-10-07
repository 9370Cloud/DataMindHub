import React, { useEffect, useState } from 'react';
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; 
import { NotionRenderer } from "react-notion";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { setPageId } from './store.js';

function Notion() {
    const dispatch = useDispatch();
    const pageId = useSelector((state) => state.pageId);
    const [notionJson, setNotionJson] = useState("");

    useEffect(() => {
        var apiLink = 'https://notion-api.splitbee.io/v1/page'
        apiLink = apiLink + pageId
        axios.get(apiLink)
            .then((response) => {
                setNotionJson(response.data);
            })
            .catch((error) => {
                console.error('API 요청 중 오류 발생:', error);
            });
    }, [pageId]);

    useEffect(() => {
        const handleAnchorClick = (event) => {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            console.log(href)
            dispatch(setPageId(href)); // 클릭한 a 태그의 href 값을 setPageId 액션에 전달
        };

        setTimeout(() => {
          const anchorTags = document.querySelectorAll('a');
          anchorTags.forEach((anchor) => {
              anchor.addEventListener('click', handleAnchorClick);
          });
  
          return () => {
              anchorTags.forEach((anchor) => {
                  anchor.removeEventListener('click', handleAnchorClick);
              });
          };
        }, 0);
        
    }, [dispatch, notionJson]);

    return (
        <div>
            <h1>Page ID: {pageId}</h1>
            <NotionRenderer
                blockMap={notionJson}
                fullPage={true}
            />
        </div>
    );
}

export default Notion
