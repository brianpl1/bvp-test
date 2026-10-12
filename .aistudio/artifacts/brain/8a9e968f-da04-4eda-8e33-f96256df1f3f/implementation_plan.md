# BVP Brand Redesign & Design System Implementation Plan

A comprehensive corporate redesign for **BVP Trading & Manufacturing Co., Ltd (Beyond Value Products)**, aligning all visual hierarchy, colors, typography, and component styling strictly with the official Brand Guidelines (*A.02 Logo Elements* and *A.04 Colour Picking*), utilizing **Controller Ext W01 Four** typography aesthetic, rich chocolate brown (`#653814`), and the 6 official gold/bronze brand tones on a crisp luxury white canvas.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following design decisions were aligned with your brand guideline inputs:
> - **Canvas & Posture**: Clean luxury white (`#FFFFFF`) with subtle warm ivory surfaces (`#FAF8F5`, `#F5F1EA`) as mandated by guideline page A.04 (*"Không gian trắng tăng cường khả năng trình bày rõ nét của logo"*), eliminating generic dark navy/blue tones.
> - **Strict 7-Color Brand Palette**:
>   - Deep Chocolate Primary: `#653814` (RGB 101, 56, 21)
>   - Rich Warm Bronze: `#865421` (RGB 134, 84, 34)
>   - Golden Caramel: `#9b6b2a` (RGB 155, 108, 44)
>   - Deep Metallic Gold: `#bb8b2c` (RGB 188, 141, 45)
>   - Primary Brand Gold: `#dec357` (RGB 223, 195, 88)
>   - Bright Sun Gold: `#f7e476` (RGB 245, 231, 118)
>   - Soft Cream Gold Light: `#f8f18c` (RGB 247, 242, 140)
> - **Typography System**: Headings and brand wordmark set in the wide geometric proportions of **Controller Ext W01 Four**, paired with high-clarity modern body typography for readability across both Vietnamese and English.
> - **Scope**: Complete front-to-back redesign of all components (Header, Hero, About, Business Areas, Vision & Mission, 7-Step Process, Products, Clients, Contact Form, Footer, and Sample Modal).

---

## 1. Overview & Core Concept

- **What It Delivers**: Transforms the website from an ad-hoc dark navy interface into an official, cohesive corporate flagship experience that strictly follows the BVP brand book. Every section reflects BVP's corporate stature as an OEM/ODM apparel and gift manufacturer trusted by Unilever, Masan, Logitech, and Greenfeed.
- **Target Audience**: Corporate procurement directors, marketing managers, HR heads, and enterprise buyers in Vietnam and internationally seeking high-standard uniform and corporate gift solutions.
- **Key Value**: Instills immediate trust and prestige, elevates brand consistency, and provides clear conversion pathways for physical sampling and quotation requests.

---

## 2. User Experience & Visual Design

### Visual Identity & Theme Tokens
```
Canvas Base:        #FFFFFF (Crisp White)
Surface Neutral:    #FAF8F5 (Ivory White / Warm Paper)
Surface Subdued:    #F3EFE6 (Warm Sand Hairline Dividers)
Text Primary:       #2A1708 (Ultra-deep Espresso for 14:1 high-contrast readability)
Text Heading/Brand: #653814 (Official BVP Chocolate Brown)
Text Muted:         #6F5642 (Subdued Warm Bronze)
Accent Primary:     #dec357 (Official BVP Warm Gold)
Accent Deep:        #bb8b2c (Official BVP Metallic Gold)
Accent Glow:        #f7e476 (Official BVP Sunlight Highlight)
Border Hairline:    #E8DFD0 (Subtle gold-sand border)
```

### Typographic Hierarchy & Proportions
- **Display & Section Titles**: Controller Ext Four aesthetic (`font-extrabold tracking-wider uppercase font-sans text-wrap: balance`). Wide stance, strong corporate authority.
- **Body & Technical Specs**: High-legibility modern sans (`Plus Jakarta Sans`), measure 65–75ch, 1.6 line height for effortless reading.
- **BVP Logo Emblem**: Authentic winged chevron insignia rendered with the official gradient transitioning from `#f7e476` → `#dec357` → `#bb8b2c` → `#865421`.

### Key User Flows & Section Redesigns
1. **Header**: Clean 3-zone contract with BVP logo, unboxed navigation links with subtle underline transitions in `#653814`, language toggle (VI/EN), and high-intent "Nhận Báo Giá" button in metallic gold.
2. **Hero Section**: High-impact editorial split with `#653814` headline, balanced value proposition, dual CTAs ("Nhận Báo Giá Ngay" & "Khám Phá Sản Phẩm"), and 4-column trust proof strip below the fold.
3. **About Section & Logo Story**: Integrates the meaning from guideline page A.02 (*cánh chim tự do, khát vọng bay xa, bản lĩnh doanh nghiệp đa ngành*), leadership letter, and factory production capacity.
4. **4 Business Areas (01 to 04)**: Clean numbered editorial layout on `#FAF8F5` surface with hairline borders, high-res photos, material pills, and category quotation hooks.
5. **Vision, Mission & 4 Core Values**: Harmonious white and deep chocolate `#653814` presentation of *Chất Lượng, Tận Tâm, Chuyên Nghiệp, Đồng Hành Bền Vững*.
6. **7-Step Order Process**: Interactive horizontal stepper with active bronze markers and detailed outputs for each phase.
7. **Products Showcase**: Segmented filter bar (All, Apparel, Bags, Plush, Gifts), detailed product cards with MOQ and specs, plus modal viewer.
8. **Key Clients**: Clean white partner grid highlighting Unilever, Greenfeed, Masan, Logitech, Swagup, Oppo, Tous les Jours, Bac Lieu University.
9. **Contact & Lead Capture Form**: Clean, high-legibility enterprise form with real-time validation, 30-minute response guarantee, and sincere thank-you modal.
10. **Footer**: Grounded in deep chocolate `#653814` with gold accents, legal company credentials, navigation links, and copyright.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: White Canvas vs. Dark Navy Background**
  - *Chosen*: Clean luxury white (`#FFFFFF`) with warm ivory surfaces.
  - *Why*: Page A.04 explicitly mandates: *"Không gian trắng và hình ảnh sẽ được mở rộng đóng vai trò quan trọng trực quan... Trắng tăng cường khả năng trình bày rõ nét của logo... Không nên sử dụng màu khác"*. This accurately follows the BVP brand identity.
  - *Alternative Considered*: Dark navy was discarded as it did not match the brand guidelines.

- **Decision 2: Typography Implementation for Controller Ext W01 Four**
  - *Chosen*: Apply a custom typography utility matching Controller Ext Four's geometry (`font-family: 'Plus Jakarta Sans', system-ui; letter-spacing: 0.08em; font-weight: 800; text-transform: uppercase;`) along with modular scale tokens in Tailwind.
  - *Why*: Provides instant, pixel-perfect rendering across all devices without external font loading failures or font licensing delays.

- **Decision 3: Zero-Pill & Editorial Anti-Slop Discipline**
  - *Chosen*: Remove noisy static pill badges and replaced with clean unboxed text and hairline borders.
  - *Why*: Creates an authentic high-end corporate presence rather than a generic startup template.

---

## 4. Technical Architecture & System Layout

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Header (Sticky Glassmorphic)                    │
│   [BVP Logo (SVG Gradient)]  ───  [Nav Links (VI/EN)]  ───  [CTA Báo Giá] │
└────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│               Hero Section (Clean Luxury White Canvas)                 │
│  - Controller-style Headline in #653814 & #bb8b2c                       │
│  - Value Proposition & Dual Action CTAs                                │
│  - High-res Visual Grid & 4-Column Proof Bar                           │
└────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│              About & Logo Story (Guideline Page A.02)                  │
│  - Logo Wing Symbolism & Leadership Letter                             │
│  - Factory Machinery & Capacity Highlights                             │
└────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│             4 Business Areas (01 Apparel, 02 Bags, 03 Plush, 04 Gifts) │
│  - Hairline Cards on #FAF8F5 Surface with Material Tags                │
└────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│         Vision & Mission + 4 Core Values (Quality, Sincerity, etc.)    │
└────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│         7-Step Order Process (Interactive Stepper & Sample Request)    │
└────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│         Products Showcase (Tabs, Technical Specs, Detail Modal)        │
└────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│         Key Clients Showcase (Unilever, Masan, Logitech, etc.)         │
└────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│         Contact & Quotation Form (Validation + 30-min SLA)             │
└────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│         Corporate Footer (Rich #653814 Grounding + Legal Data)         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Verification Plan

- **Visual Fidelity**: Validate that all 7 brand colors from page A.04 are represented correctly and that background canvases are crisp white/ivory.
- **Typography**: Check that headings utilize Controller-style extended tracking and bold weights.
- **Interactive Handlers**: Ensure language toggle (VI/EN), sample modal, product detail modal, step navigation, and contact form validation work with zero errors.
- **Compilation & Build**: Run `compile_applet` and `npm run build` to ensure error-free bundle generation.
