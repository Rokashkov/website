/* eslint-disable react/jsx-one-expression-per-line */
import Layout from "../components/Layout/Layout"
import ContentList from "../components/Main/ContentList/ContentList"
import ListItem from "../components/Main/ContentList/ListItem/ListItem"
import Section from "../components/Main/Section/Section"
import ShortcutBoard from "../components/Main/ShortcutBoard/ShortcutBoard"
import ShortcutBoardItem from "../components/Main/ShortcutBoard/ShortcutBoardItem/ShortcutBoardItem"
import CSS from "../components/Svg/CSS"
import Express from "../components/Svg/Express"
import Git from "../components/Svg/Git"
import HTML from "../components/Svg/HTML"
import JS from "../components/Svg/JS"
import NestJS from "../components/Svg/Nest"
import Axios from "../components/Svg/Axios"
import JWT from "../components/Svg/JWT"
import NextJS from "../components/Svg/Next"
import Node from "../components/Svg/Node"
import PostgreSQL from "../components/Svg/PostgreSQL"
import Prisma from "../components/Svg/Prisma"
import React from "../components/Svg/React"
import Redux from "../components/Svg/Redux"
import TS from "../components/Svg/TS"
import Sass from "../components/Svg/SASS"

export default function About () {
	
	return (
		<Layout>
			<Section>
				<h1>Welcome</h1>
				<h2>to</h2>
				<h1>About Page</h1>
			</Section>
			<Section article>
				<ContentList title="Contents">
					<ListItem href="#who">Who am I?</ListItem>
					<ListItem href="#hard">Hard skills</ListItem>
					<ListItem href="#soft">Soft skills</ListItem>
					<ListItem href="#stack">Current stack</ListItem>
				</ContentList>
			</Section>
			<Section
				article
				id="who"
			>
				<h1>Who am I?</h1>
				<p>My name is <span>Vladimir Rokashkov</span>, and I am an independent <span>fullstack web developer</span> based in Tomsk city, Russia.</p>
				<p>Nowodays I program on <span>typescript</span> and use <span>Next</span> and <span>Nest</span> as a main stack.</p>
			</Section>
			<Section
				article
				id="hard"
			>
				<h1>Hard skills</h1>
				<ContentList title="Skills List">
					<ListItem href="#git">Git</ListItem>
					<ListItem href="#html">HTML</ListItem>
					<ListItem href="#css">CSS</ListItem>
					<ListItem href="#sass">Sass</ListItem>
					<ListItem href="#js">JavaScript</ListItem>
					<ListItem href="#ts">TypeScript</ListItem>
					<ListItem href="#node">Node</ListItem>
					<ListItem href="#express">Express</ListItem>
					<ListItem href="#react">React</ListItem>
					<ListItem href="#redux">Redux Toolkit</ListItem>
					<ListItem href="#axios">Axios</ListItem>
					<ListItem href="#jwt">JSON Web Tokens</ListItem>
					<ListItem href="#next">Next</ListItem>
					<ListItem href="#psql">PostgreSQL</ListItem>
					<ListItem href="#prisma">Prisma</ListItem>
					<ListItem href="#nest">Nest</ListItem>
				</ContentList>
				<ShortcutBoard>
					<ShortcutBoardItem
						title="Git"
						href="#git"
					>
						<Git/>
					</ShortcutBoardItem>
					<ShortcutBoardItem 
						title="HTML"
						href="#html"
					>
						<HTML/>
					</ShortcutBoardItem>
					<ShortcutBoardItem
						title="CSS"
						href="#css"
					>
						<CSS/>
					</ShortcutBoardItem>
					<ShortcutBoardItem
						title="Sass"
						href="#sass"
					>
						<Sass/>
					</ShortcutBoardItem>
					<ShortcutBoardItem
						title="JavaScript"
						href="#js"
					>
						<JS/>
					</ShortcutBoardItem>
					<ShortcutBoardItem
						title="TypeScript"
						href="#ts"
					>
						<TS/>
					</ShortcutBoardItem>
					<ShortcutBoardItem
						title="NodeJS"
						href="#node"
					>
						<Node/>
					</ShortcutBoardItem>
					<ShortcutBoardItem
						title="Expess"
						href="#express"
					>
						<Express/>
					</ShortcutBoardItem>
					<ShortcutBoardItem
						title="React"
						href="#react"
					>
						<React/>
					</ShortcutBoardItem>
					<ShortcutBoardItem
						title="Redux Toolkit"
						href="#redux"
					>
						<Redux/>
					</ShortcutBoardItem>
					<ShortcutBoardItem
						title="Axios"
						href="#axios"
					>
						<Axios/>
					</ShortcutBoardItem>
					<ShortcutBoardItem
						title="JSON Web Tokens"
						href="#jwt"
					>
						<JWT/>
					</ShortcutBoardItem>
					<ShortcutBoardItem
						title="Next"
						href="#next"
					>
						<NextJS/>
					</ShortcutBoardItem>
					<ShortcutBoardItem
						title="PostgreSQL"
						href="#psql"
					>
						<PostgreSQL/>
					</ShortcutBoardItem>
					<ShortcutBoardItem
						title="Prisma"
						href="#prisma"
					>
						<Prisma/>
					</ShortcutBoardItem>
					<ShortcutBoardItem
						title="NestJS"
						href="#nest"
					>
						<NestJS/>
					</ShortcutBoardItem>
				</ShortcutBoard>
				<h2 id="git">Git</h2>
				<p>First things first. <span>Git</span> is the most common version control system. I use branches, commits, merges, remotes etc.</p>
				<h2 id="html">HTML</h2>
				<p>
					You won{ '\'' }t believe it, but I know <span>HTML</span>. I try to always use semanthic tags. For example, this
					{ ' ' }
					<span><code>{ '<p>' }</code></span>
					{ ' ' }
					tag is a child of
					{ ' ' }
					<span><code>{ '<section>' }</code></span>
					{ ' ' }
					tag of
					{ ' ' }
					<span><code>{ '<main>' }</code></span>
					{ ' ' }
					element.
				</p>
				<h2 id="css">CSS</h2>
				<p>
					I pretty well know <span>CSS</span>. Like in other languges nobody can{ '\'' }t know about all language feuters, but I think, if you have a lack of knowledge of CSS properties, you can always seacrch
					{ ' ' }
					<span>MDN Web Docs</span>
					{ ' ' }
					for new ones.
				</p>
				<h2 id="sass">Sass</h2>
				<p>As a CSS prepocessor i prefer <span>Sass</span>. It{'\''}s more usefull then vanil <span>CSS</span> and more beautiful then <span>Scss</span>.</p>
				<h2 id="js">JavaScript</h2>
				<p>
					I sure i know most of basic feuters of <span>JS</span> and some uncommon possibilities. If you want to make sure of my competence, visit the
					{ ' ' }
					<span>
						<a
							href="/gallery"
							target="_blank"
							rel="noreferrer"
						>
							Gallery
						</a>
					</span>
					{ ' ' }
					page. I love this language for it{'\''}s simplicity and big amount of syntactic sugar.
				</p>
				<h2 id="ts">TypeScript</h2>
				<p>I didn{'\''}t want to learn <span>TS</span> for a long time. I didn{'\''}t understand why i had to use it instead <span>JS</span>, but after some practice I began to realize that <span>TS</span> allows to avoid tons of errors that i can{'\''}t predict by myself. Also coding with static typing in modern IDEs is very satisfying. I like type all of that can be typed.</p>
				<h2 id="node">Node </h2>
				<p><span>Node</span> has been like a new world for me. It has no difference with <span>JS</span>, but it doesn{'\''}t require a browser for running. And at that moment I realized that i broke my chains and finally can breathe free. From Node started my backend jorney.</p>
				<h2 id="express">Express</h2>
				<p id="express">The most popular node framework, usefull and simple. With <span>Express</span> I can simply use base routing, middlewares, server logic and error handling.</p>
				<h2 id="react">React</h2>
				<p>I have almost no expirience with <span>Angular</span> or <span>Vue</span>, but with <span>React</span> I can create what I want very quickly and very easily. <span>React</span> is my big love, and I don{'\''}t plan to change it to another frontend framefork anytime soon. I like <span>JSX</span> a lot, I like writing stateful logic and using hooks.</p>
				<h2 id="redux">Redux Toolkit</h2>
				<h2 id="axios">Axios</h2>
				<h2 id="jwt">JSON Web Tokens</h2>
				<h2 id="next">Next</h2>
				<h2 id="psql">PostgreSQL</h2>
				<h2 id="prisma">Prisma</h2>
				<h2 id="nest">Nest</h2>
			</Section>
			<Section
				article
				id="soft"
			>
				<h1>Soft skills</h1>
			</Section>
			<Section
				article
				id="stack"
			>
				<h1>Current stack</h1>
			</Section>	
		</Layout>
	)
}