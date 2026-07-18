# Interactive Quiz Slideshow PBL

## Project Synopsis

This problem-based learning project asks students to act as junior web developers creating a browser-based learning experience for a real audience. The project was developed from an externship with **Bio::Neos**, where software teams identify client needs, work within an existing codebase, reuse components, test products, respond to feedback, and communicate their decisions.

Each student chooses a school-appropriate topic and builds an interactive Reveal.js slideshow that teaches the topic and checks the audience’s understanding. Students use **HTML** to structure the content, **CSS** to control the visual design, and **JavaScript** to create interactive features and an automatically scored quiz.

### Driving Question

**How can we use HTML, CSS, JavaScript, and user feedback to design an interactive quiz slideshow that effectively teaches a specific audience about a topic?**

## Final Product Requirements

A completed project should include:

- a clear title, purpose, and identified audience;
- at least 10 teaching or content slides;
- at least 3 working interactive components;
- a vertical quiz section with 10 original multiple-choice questions;
- automatic scoring, feedback, and a working reset option;
- intentional color, typography, spacing, alignment, and visual consistency;
- accessible images, readable text, keyboard-friendly controls, and responsive layouts;
- testing in at least two browsers or devices;
- at least one meaningful revision based on user feedback; and
- a short public demonstration or presentation.

## Getting Started

1. Extract the complete project folder. Do not move individual files out of the folder because the HTML relies on the included CSS, JavaScript, image, and plugin folders.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser.
4. Edit the project in Visual Studio Code, save the files, and refresh the browser to view changes.
5. Keep the browser Developer Tools Console open while troubleshooting JavaScript or loading errors.

A local development extension such as **Live Server** may be used, but the project can also run by opening `index.html` directly.

## Project File Guide

### Core Web Files

| File | Purpose | How to Use It |
|---|---|---|
| `index.html` | Main student slideshow | Replace placeholders, build the teaching slides, edit quiz questions, and paste selected interactive sections here. |
| `css/student-customizations.css` | Single editable style file | Change theme variables, fonts, colors, spacing, cards, buttons, quiz styles, and interactive component styles. |
| `js/project.js` | Main project behavior | Controls quiz scoring, feedback, reset behavior, and all five interactive types. Modify only after the basic project works. |
| `interactive-examples.html` | Demonstration page | Open in a browser to see all five interactive options working before selecting components. |
| `interactive-snippets/interactive-slides.html` | Copyable HTML components | Copy one complete `<section>...</section>` block and paste it inside the slideshow’s `<div class="slides">`. |
| `interactive-snippets/INTERACTIVES_GUIDE.md` | Interactive instructions | Explains the purpose and required IDs or data attributes for each interactive. |

### Planning and Assessment Files

| File | Purpose | Recommended Use |
|---|---|---|
| `DESIGN_BRIEF.md` | Defines the client, audience, problem, learning goals, visual direction, accessibility, and sources | Complete before coding. Teacher approval is the first checkpoint. |
| `STORYBOARD.md` | Plans slide sequence, visuals, interactions, sources, and quiz questions | Complete before building the full slideshow. Use for peer review. |
| `TEST_PLAN.md` | Records functionality, usability, accessibility, browser, and device testing | Complete with at least two testers after the minimum working product is finished. |
| `FINAL_REFLECTION.md` | Prompts students to explain design decisions, debugging, feedback, and learning | Complete after the final presentation or submission. |
| `RUBRIC.md` | 100-point assessment guide | Review at the start of the project and use during final evaluation. |
| `STANDARDS_ALIGNMENT.md` | Connects the project to Iowa Information Technology standards | Use for lesson planning, standards documentation, and student evidence. |
| `STUDENT_ACTIVITY.md` | Full student project directions | Use as the detailed assignment sheet and project timeline. |
| `TEACHER_GUIDE.md` | Suggested prerequisites, checkpoints, differentiation, and extensions | Use when planning instruction and conferences. |
| `STYLE_CUSTOMIZATION.md` | Detailed CSS customization directions | Use when students are ready to personalize the visual theme. |
| `CSS_STRUCTURE_NOTE.md` | Explains which CSS file students should edit | Reinforces that framework CSS should remain unchanged. |

## Recommended Project Workflow

### Phase 1: Define the Problem

Students complete `DESIGN_BRIEF.md` and identify:

- the client or purpose;
- a specific target audience;
- what the audience should learn;
- reliable information and media sources;
- accessibility needs; and
- the criteria that will define a successful product.

**Checkpoint 1:** Teacher or client approves the topic, audience, and design brief.

### Phase 2: Plan the Product

Students complete `STORYBOARD.md` by planning:

- at least 10 teaching slides;
- the order in which information will be introduced;
- visuals and source credits;
- at least 3 interactive components;
- 10 quiz questions, correct answers, and believable distractors; and
- how users will navigate and receive feedback.

**Checkpoint 2:** Peer or teacher reviews the storyboard and quiz plan.

### Phase 3: Build a Minimum Working Product

Students should first create a simple version that works before adding extra effects.

1. Edit the title slide in `index.html`.
2. Add content to the 10 blank teaching slides.
3. Replace all filler quiz questions and answers.
4. Confirm every quiz question has exactly one correct answer.
5. Add at least 3 interactive components.
6. Customize the visual theme in `css/student-customizations.css`.
7. Test navigation, buttons, feedback, scoring, and reset behavior.

**Checkpoint 3:** The full structure exists, the quiz works, and three interactives function.

### Phase 4: Test and Revise

Students complete `TEST_PLAN.md` with at least two testers. Testing should include:

- horizontal and vertical navigation;
- every interactive control;
- quiz answer keys and score calculations;
- reset behavior;
- keyboard navigation;
- text size and color contrast;
- image alt text and source credits;
- narrow-screen layouts; and
- at least two browsers or devices.

Students then document and complete at least one meaningful revision.

**Checkpoint 4:** Testing evidence and revision log are complete.

### Phase 5: Publish and Present

Students publish the project using the teacher’s assigned method, such as GitHub Pages, and give a short demonstration that explains:

- the audience and learning goal;
- one important HTML decision;
- one important CSS decision;
- how one JavaScript interactive works;
- a bug or challenge they solved; and
- a change made because of feedback.

## Editing the Teaching Slides

Reveal.js uses `<section>` elements as slides. A basic teaching slide looks like this:

```html
<section>
  <span class="tag">Section Label</span>
  <h2>Slide Heading</h2>
  <p>Add the teaching content here.</p>
</section>
```

Keep each slide focused on one major idea. Use short paragraphs, lists, diagrams, images, examples, and interactions rather than placing a large block of text on one slide.

### Adding Images

Place image files in the `images` folder and use a relative path:

```html
<img src="images/example-image.png" alt="A specific description of the image">
```

Every meaningful image should include useful `alt` text. Students should also provide source attribution for media they did not create.

## Customizing the Visual Style

All student-editable styling is located in:

```text
css/student-customizations.css
```

Students should begin by changing the variables near the top of the file. The default values provide a Bio::Neos-inspired dark theme with teal, purple, yellow, and coral accents.

```css
:root {
  --student-background: #1f1f1f;
  --student-text: #f7f7f7;
  --student-primary: #3bcbaf;
  --student-secondary: #918fbf;
  --student-highlight: #f9cf8d;
  --student-warning: #ee746c;
}
```

Students may also change heading and body fonts, text sizes, border widths, corner radii, spacing, cards, buttons, and component-specific styles. They should not edit `css/reset.css` or `css/reveal.css` unless the teacher specifically assigns framework-level work.

When headings appear too thick, use a lighter font weight in the heading rules, such as:

```css
.reveal h1,
.reveal h2,
.reveal h3 {
  font-weight: 500;
  letter-spacing: 0;
  text-shadow: none;
}
```

## Editing the Quiz

The quiz appears as a vertical stack near the end of `index.html`. Users move down through the questions and results slide.

Each question must have exactly one answer button with:

```html
data-correct="true"
```

All other answer buttons must use:

```html
data-correct="false"
```

Example:

```html
<button class="quiz-option" data-correct="false">Incorrect answer</button>
<button class="quiz-option" data-correct="true">Correct answer</button>
<button class="quiz-option" data-correct="false">Incorrect answer</button>
<button class="quiz-option" data-correct="false">Incorrect answer</button>
```

Students should verify that:

- there are 10 original questions;
- each question assesses content actually taught in the slideshow;
- each question has one correct answer;
- distractors are believable but clearly incorrect;
- feedback appears after selecting an answer; and
- the final score and reset button work correctly.

## Using the Interactive Components

The project includes five reusable interactive options. Students should open `interactive-examples.html` first, then copy the desired slide from `interactive-snippets/interactive-slides.html`.

### 1. Click-to-Reveal Cards

Use for vocabulary, clues, hidden explanations, examples, or answers.

The button’s `data-reveal-target` must match the hidden content’s `id`:

```html
<button data-reveal-target="fact-1">Reveal details</button>
<p id="fact-1">Hidden information</p>
```

Use unique IDs when adding more than one reveal activity.

### 2. Topic Tabs

Use for comparisons, categories, perspectives, or multiple views of one topic.

Each tab button’s `data-tab-target` must match the `id` of one tab panel. Keep every tab target and panel ID unique within the page.

### 3. Step-Through Sequence

Use for procedures, timelines, algorithms, life cycles, or cause-and-effect sequences.

Add or remove `.stepper-panel` elements as needed. The JavaScript automatically counts the panels and moves through them in order.

### 4. Sort Between Two Categories

Use for classification, true versus false, cause versus effect, examples versus nonexamples, or other two-part comparisons.

Each item’s `data-correct-category` must match one category container’s `data-sort-category` value:

```html
<button class="interactive-button sort-item" data-correct-category="mammal">Whale</button>
<article class="sort-category" data-sort-category="mammal">...</article>
```

Users may drag items or click an item and then click a category. Category names must be unique within the activity.

### 5. Put Content or Steps in Order

Use for procedures, timelines, ranked lists, plot events, algorithms, or cycle stages.

Each item needs a unique correct position in `data-order`:

```html
<li class="order-item" data-order="1">First step</li>
<li class="order-item" data-order="2">Second step</li>
```

Place the items in a mixed-up order in the HTML so the activity begins as a challenge. Users may drag items or use the included up and down controls.

## JavaScript Guidance

The file `js/project.js` contains the shared behavior for the quiz and interactive components. Students should avoid changing the script until the standard version works.

When modifying JavaScript:

1. Make one small change at a time.
2. Save and test immediately.
3. Check the browser Console for errors.
4. Confirm class names, IDs, and `data-*` values match the HTML exactly.
5. Restore the last working version when a change creates several new errors.
6. Use Git commits to create safe restore points when Git is part of the course.

## Accessibility and Usability Expectations

Students should design for users rather than only for appearance. Projects should include:

- readable font sizes and line spacing;
- sufficient color contrast;
- meaningful image alt text;
- keyboard-accessible buttons and controls;
- visible focus and feedback states;
- concise slide content;
- logical navigation;
- labels that explain what controls do; and
- layouts that remain usable on smaller screens.

Do not use color alone to communicate correct and incorrect responses. Include visible text or symbols as well.

## Suggested Classroom Benchmarks

1. **Project proposal:** topic, audience, and learning goals approved.
2. **Planning review:** design brief, storyboard, sources, and quiz draft complete.
3. **Structure review:** title and 10 content slides exist.
4. **Functionality review:** 3 interactives and the full quiz work.
5. **Design review:** CSS is intentionally customized and readable.
6. **Testing review:** two testers, two environments, and revision evidence documented.
7. **Final delivery:** published product, presentation, and reflection complete.

## Differentiation Options

### Additional Support

- provide a teacher-approved topic list;
- allow pair programming with individual reflections;
- require use of the provided components without major JavaScript changes;
- provide completed examples and partially filled planning documents;
- conference with students at each benchmark; and
- allow students to explain code through an oral conference or screen recording.

### Extension Opportunities

- create an original sixth interactive;
- randomize questions or answers;
- store results with `localStorage`;
- add a progress indicator;
- improve screen-reader announcements;
- use Git branches and pull requests for code review; or
- publish and gather feedback from a community or workplace audience.

## Troubleshooting Checklist

When something does not work:

1. Save every edited file and refresh the browser.
2. Open Developer Tools and read the first Console error.
3. Confirm file paths and spelling, including capitalization.
4. Check that HTML tags are correctly nested and closed.
5. Confirm IDs and `data-*` targets match exactly.
6. Confirm each quiz question has exactly one correct answer.
7. Check that each sorting item has one valid category.
8. Check that each ordering item has one unique order number.
9. Test the smallest part of the feature before testing the entire slideshow.
10. Compare the code with the working example.

## Submission Checklist

- [ ] Design brief and storyboard are complete.
- [ ] The slideshow identifies a clear audience and purpose.
- [ ] At least 10 teaching slides are complete.
- [ ] At least 3 interactive components work.
- [ ] The vertical quiz contains 10 original questions.
- [ ] Every question has exactly one correct answer.
- [ ] Scoring, feedback, and reset features work.
- [ ] The CSS has been meaningfully customized.
- [ ] Images include alt text and source credits.
- [ ] The project has been tested by at least two users.
- [ ] The project works in at least two browsers or devices.
- [ ] At least one meaningful revision is documented.
- [ ] The final presentation and reflection are complete.

## Standards Connection

The project supports Iowa Information Technology standards related to:

- reusable components;
- product visual design and typography;
- HTML and CSS development;
- client-side JavaScript;
- website testing and browser compatibility;
- usability and accessibility;
- modifying an existing program;
- code review; and
- evaluating a product’s effectiveness.

See `STANDARDS_ALIGNMENT.md` for the detailed standard numbers and evidence.

## Workplace Connection

The project simulates a simplified software-development process modeled after practices connected to the Bio::Neos externship. Students work from a client problem, identify users, plan features, modify an existing codebase, use reusable components, complete development checkpoints, test with users, document bugs, revise the product, and publicly demonstrate the final solution. The emphasis is not only on producing a visually impressive slideshow, but also on creating a reliable, understandable, accessible product and explaining the decisions behind it.
