# 📅 Weekly Timetable

A lightweight, mobile-first, and fully customizable weekly timetable web application featuring real-time status updates, live countdown timers, multi-language support (English & Arabic), and automatic local persistence.

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://mohammedbouabdallah.github.io/timetable/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Features

* **Live Status & Countdowns**: Automatically detects ongoing classes, shows "starting soon" warnings within 15 minutes, and displays visual progress bars for active sessions.
* **Bilingual Support**: Full native support for English (`ltr`) and Arabic (`rtl`) with automatic localized day/month formatting and typography optimization.
* **Interactive Week Grid**: Provides an overview of your entire week at a glance with live indicators on current time blocks.
* **Fully Customizable**: Add, edit, or remove days, configurable time slots, subjects (with dual-language names), and room locations directly from an intuitive bottom-sheet editor.
* **Data Backup & Restore**: Easily export your schedule as text or restore via JSON backup directly within the browser.
* **Auto-Save & Offline-Ready**: Changes save instantly to `localStorage` so your data stays safe and accessible offline.

---

## 🚀 Usage

You can use the live application directly in your browser:
👉 **[mohammedbouabdallah.github.io/timetable/](https://mohammedbouabdallah.github.io/timetable/)**

### Running Locally
Since this is a static single-page app, no build steps or package managers are required:
1. Clone or download the repository.
2. Open `index.html` in any modern web browser, or run a local static server from the repo root.
3. The PWA icons and manifests are kept under the `assets/` folder for cleaner organization.

---

## 🛠️ Tech Stack

* **HTML5 / CSS3**: Built with modern CSS variables, CSS grid/flexbox layouts, backdrop-filters, and fluid typography.
* **Vanilla JavaScript**: Zero external frameworks or libraries—lightweight, performant, and dependency-free.
* **Fonts**: Powered by *Bricolage Grotesque* and *Readex Pro* from Google Fonts.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
