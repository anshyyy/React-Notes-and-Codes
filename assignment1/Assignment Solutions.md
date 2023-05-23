## What is Emmet ?
Emmet, formerly known as Zen Coding, is a popular productivity tool for web developers and designers. It is a plugin or extension that can be integrated into various text editors or integrated development environments (IDEs) such as Visual Studio Code, Sublime Text, and Atom.

Emmet allows developers to write HTML and CSS code more quickly and efficiently by using abbreviations or shortcuts. It enables the expansion of these abbreviations into complete HTML or CSS code snippets, saving time and reducing the amount of manual typing required.

With Emmet, you can write complex HTML structures or repetitive CSS styles using simple expressions. For example, instead of writing the entire HTML structure for a table manually, you can use an abbreviation like ```table>tr*3>td*3``` and expand it into a complete table structure with three rows and three columns.

## Difference between a Library and Framework?
Library:

+ A library is a collection of pre-written code or functions that provide specific functionality.
+ It is typically focused on a specific domain or functionality, such as handling dates, making HTTP requests, or manipulating images.
+ Libraries are designed to be reused by developers to solve specific problems or perform specific tasks in their applications.
+ Developers have more control over the application's flow and architecture when using libraries.
+ Examples of libraries include React, jQuery, Lodash, and TensorFlow.


Framework:

+ A framework is a more comprehensive and structured set of tools, libraries, and conventions that provide a foundation for building applications.
+ It defines the overall architecture and provides a framework of rules, guidelines, and structures for developers to follow.
Frameworks cover a broader range of functionalities and provide a cohesive way of building and organizing applications.
+ Developers have less control over the application's flow and architecture as frameworks often dictate specific patterns and impose a certain structure.
+ Frameworks often provide additional features like data handling, database integration, user authentication, routing, and more.
+ Examples of frameworks include Ruby on Rails, Django, Angular, and Laravel.

SDK (Software Development Kit):

+ An SDK is a collection of tools, libraries, documentation, and sample code that provides a complete set of resources for developing applications for a specific platform, framework, or programming language.
+ SDKs typically include development tools (compilers, debuggers, IDEs), libraries, APIs, documentation, and sample code.
+ SDKs are more comprehensive than libraries and frameworks as they provide a complete package of resources to develop applications on a specific platform or with a specific language.
+ SDKs often target a particular platform (e.g., Android SDK, iOS SDK) or a specific programming language (e.g., Java SDK, .NET SDK).
SDKs simplify and accelerate the development process by bundling all the necessary tools and resources in one package.

In summary, a library provides pecific functionality, a framework offers a structured set of tools and conventions for building applications, and an SDK provides a comprehensive package of tools, libraries, documentation, and sample code for developing applications on a specific platform or with a specific programming language. Libraries are more focused, frameworks provide a broader structure, and SDKs provide a complete development package for a specific context.

## What is CDN ? Why do we use it?
CDN stands for Content Delivery Network. It is a globally distributed network of servers strategically located in different geographical regions. The purpose of a CDN is to deliver web content, such as HTML, CSS, JavaScript files, images, videos, and other media, to end-users with improved performance and reliability.

When you use a CDN, your website's static content is cached and stored on multiple servers distributed across the globe. When a user requests content from your website, the CDN automatically serves the content from the server that is closest to the user's geographical location. This proximity reduces the distance and network latency between the user and the server, resulting in faster content delivery.

1.  **Improved Performance**: By delivering content from servers geographically closer to the user, CDNs reduce latency and improve website loading times. This enhanced performance leads to a better user experience, especially for users located far away from the origin server.

2. **Scalability and Reliability**: CDNs distribute the load across multiple servers, reducing the strain on the origin server. This allows for better scalability and improved reliability, as the CDN can handle high traffic volumes and distribute the load efficiently.

3. **Global Reach**: CDNs have servers located in various regions worldwide, ensuring that content can be delivered quickly to users regardless of their geographical location. This is particularly beneficial for websites with a global audience.

4. **Bandwidth Optimization**: CDNs can help optimize bandwidth usage by caching and serving content closer to the end-users. This reduces the amount of data that needs to be transmitted from the origin server, leading to lower bandwidth costs and more efficient use of network resources.

5. **DDoS Mitigation**: Some CDNs provide Distributed Denial of Service (DDoS) protection by absorbing and mitigating malicious traffic before it reaches the origin server. This helps in safeguarding the website against DDoS attacks.

6. **Content Acceleration**: CDNs can optimize content delivery by compressing files, utilizing caching techniques, and employing advanced delivery algorithms. This further enhances website performance and reduces server load.

In summary, CDNs are used to deliver web content efficiently and improve the performance and reliability of websites. They leverage a network of distributed servers to reduce latency, handle high traffic loads, and provide a better user experience. CDNs are especially beneficial for websites with a global audience and those that serve large amounts of static content.

## Why is React known as React ?
React, the JavaScript library for building user interfaces, is known as "React" because of its core concept of reacting to changes in data and efficiently updating the user interface.

The name "React" signifies the fundamental principle behind the library's design, which is the ability to reactively update the user interface in response to changes in application state or data. Instead of manually manipulating the DOM (Document Object Model) to reflect these changes, React introduced a new approach where the UI is updated automatically based on a virtual representation of the DOM.


## What is difference between React and ReactDOM ?
React and ReactDOM are two related but distinct entities in the React ecosystem. Here's a breakdown of the difference between React and ReactDOM:

React:

+ React is a JavaScript library for building user interfaces.
+ It provides a declarative and component-based approach to building UIs.
+ React focuses on managing the state and rendering of components in an efficient and reusable manner.
+ It provides features such as virtual DOM diffing, component lifecycle methods, state management, and JSX syntax.
+ React can be used to build applications for various platforms, including web, mobile, and desktop.
+ React is platform-agnostic and doesn't handle the actual rendering to the browser or native environments directly.

ReactDOM:

+ ReactDOM is a specific package within the React ecosystem.
It is responsible for rendering React components to the DOM (Document Object Model) or other target environments.
ReactDOM provides the necessary methods and APIs to interact with the actual browser DOM or other host environments.
+ It bridges the gap between React's virtual DOM representation and the real DOM, enabling the rendering of React components in the browser.
+ ReactDOM exposes methods such as ReactDOM.render(), which is used to mount React components into the DOM, and ReactDOM.unmountComponentAtNode(), which is used to unmount components from the DOM.
+ ReactDOM is primarily used when developing web applications with React to handle the rendering and manipulation of the browser DOM.

In summary, React is the core library for building UI components and managing their state, while ReactDOM is a specific package within the React ecosystem that handles the rendering of React components to the browser DOM or other target environments. React focuses on the component-based architecture and state management, while ReactDOM facilitates the interaction between React components and the actual DOM.

## What is difference between react.development.js and react.production.js files via CDN?

The difference between the "react.development.js" and "react.production.js" files when loaded via a CDN lies in the level of optimization and performance characteristics.

react.development.js:

The "react.development.js" file is typically used during development or debugging stages.
It includes extra warning messages, debug information, and helpful development tools.
The file size is generally larger than the production version as it contains additional code for error checking, runtime validations, and development-specific features.
It may have slower performance compared to the production version due to the additional debugging overhead.
react.production.js:

The "react.production.js" file is optimized for production environments and is recommended for deployment.
It removes the development-specific features, warning messages, and debug information, resulting in a smaller file size.
The production version is typically minified and compressed to reduce its footprint and improve loading times.
It aims for optimized performance and efficiency in terms of memory usage and execution speed.
When building a production-ready application, it is generally recommended to use the "react.production.js" file in order to achieve better performance and minimize unnecessary overhead. The development version, "react.development.js," is more suitable during the development process when debugging and error-checking features are valuable.

Note that when deploying an application, it's common practice to load React and other libraries from a CDN for faster delivery and caching benefits. However, it's essential to ensure that the chosen CDN serves the correct version of React, whether it's the development or production version, depending on the stage and requirements of your application.