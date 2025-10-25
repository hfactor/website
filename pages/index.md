---
layout: Post
permalink: /
title: Hiran Venugopalan
---
<p>
  <strong>Hiran Venugopalan</strong><br>
  Maker and product designer focused on tools, type, and systems. Design mentor for design thinking and design leadership. Home brewer. Coffee workshop host. <span class="small-link"><a href="/about">more</a></span>
</p>

<div class="card-grid">
  <a href="/notes" class="card">
    <h4>Working Notes</h4>
    <p>Ongoing thoughts on design, systems, and internet patterns.</p>
  </a>
  <a href="/logs" class="card">
    <h4>Books & Bookmarks</h4>
    <p>Stuff I’ve read, watched, heard, or bookmarked lately.</p>
  </a>
  <a href="/projects" class="card">
    <h4>Projects</h4>
    <p>Small projects for curious ideas and odd ends.</p>
  </a>
  <a href="https://hiran.substack.com/" class="card">
    <h4>Newsletter</h4>
    <p>Every so often, a short note with a bit of <i>This&That.</i></p>
  </a>
</div>


<h3>Now</h3>
<div>
  {% assign now_page = site.pages | where: "permalink", "/now" | first %}
  {% capture content_with_date %}{{ now_page.content }} <span class="small-link"><a href="/now">{{ now_page.date | date: "%d %b %Y" }}</a></span>{% endcapture %}
  {{ content_with_date | markdownify }}
</div>

<h3>Connect</h3>
<p>
I enjoy meeting people who are building, exploring, or figuring things out. If you ever feel like talking through an idea, a project, or a question you’re sitting with, I’m happy to meet either over a relaxed coffee at a café in Bangalore or on a quick call if that’s easier. You can grab a slot at <a href="https://cal.com/hfactor/">cal.com/hfactor</a>, or just drop me an email.<span class="small-link"> <a href="mailto:hiran.v@gmail.com">hiran.v@gmail.com</a></span>.