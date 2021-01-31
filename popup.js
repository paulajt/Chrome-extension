// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changingPageAppearance = document.getElementById('changingPageAppearance');

changingPageAppearance.onclick = function () {
  console.log('Running Extension');
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, { file: 'content.js' });
    chrome.tabs.insertCSS(tabs[0].id, { file: 'style.css' });
  });
  document.getElementById('changingPageAppearance').disabled = true;
}
