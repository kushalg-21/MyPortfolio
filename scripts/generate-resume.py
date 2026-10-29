#!/usr/bin/env python3
"""Generate Kushal Gowda G.'s one-page A4 resume.

Requirements:
    pip install reportlab

Run from the project root:
    python scripts/generate-resume.py

The PDF is written to public/resume/Kushal-Gowda-G-Resume.pdf.
"""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)

OUTPUT = Path(__file__).resolve().parents[1] / "public" / "resume" / "Kushal-Gowda-G-Resume.pdf"

NAME = "Kushal Gowda G."
ROLE = "B.Tech Computer Science and Engineering Student"
UNIVERSITY = "CMR University"
YEAR = "Third Year"

EMAIL = "kushalgowda8550076182@gmail.com"
LINKEDIN = "https://www.linkedin.com/in/kushal-gowda-g-946546390"
LINKEDIN_LABEL = "linkedin.com/in/kushal-gowda-g-946546390"
GITHUB = "https://github.com/kushalg-21"
GITHUB_LABEL = "github.com/kushalg-21"

INK = colors.HexColor("#171917")
BODY = colors.HexColor("#292D2A")
MUTED = colors.HexColor("#5E6660")
ACCENT = colors.HexColor("#315C4C")
RULE = colors.HexColor("#D8DCD9")
LINK = colors.HexColor("#315C4C")

PAGE_WIDTH, PAGE_HEIGHT = A4
MARGIN_X = 16 * mm
MARGIN_TOP = 14 * mm
MARGIN_BOTTOM = 13 * mm
CONTENT_WIDTH = PAGE_WIDTH - (2 * MARGIN_X)

styles = {
    "name": ParagraphStyle(
        "Name",
        fontName="Helvetica-Bold",
        fontSize=24,
        leading=26,
        textColor=INK,
        spaceAfter=2,
        alignment=TA_LEFT,
    ),
    "role": ParagraphStyle(
        "Role",
        fontName="Helvetica",
        fontSize=10.2,
        leading=13,
        textColor=BODY,
        spaceAfter=1,
    ),
    "education_line": ParagraphStyle(
        "EducationLine",
        fontName="Helvetica",
        fontSize=9.2,
        leading=12,
        textColor=MUTED,
        spaceAfter=0,
    ),
    "contact": ParagraphStyle(
        "Contact",
        fontName="Helvetica",
        fontSize=8.5,
        leading=11.5,
        textColor=BODY,
        spaceAfter=0,
    ),
    "section": ParagraphStyle(
        "Section",
        fontName="Helvetica-Bold",
        fontSize=9.2,
        leading=11.5,
        textColor=ACCENT,
        spaceBefore=0,
        spaceAfter=0,
    ),
    "body": ParagraphStyle(
        "Body",
        fontName="Helvetica",
        fontSize=9.7,
        leading=13.3,
        textColor=BODY,
        spaceAfter=0,
    ),
    "body_tight": ParagraphStyle(
        "BodyTight",
        fontName="Helvetica",
        fontSize=9.7,
        leading=13,
        textColor=BODY,
        spaceAfter=0,
    ),
    "project_title": ParagraphStyle(
        "ProjectTitle",
        fontName="Helvetica-Bold",
        fontSize=10.1,
        leading=12.5,
        textColor=INK,
        spaceAfter=0,
    ),
    "project_meta": ParagraphStyle(
        "ProjectMeta",
        fontName="Helvetica",
        fontSize=8.5,
        leading=10.8,
        textColor=MUTED,
        spaceAfter=0,
    ),
}


def link(url: str, label: str, color: colors.Color = LINK) -> str:
    return f'<link href="{url}" color="{color.hexval()}">{label}</link>'


def section_heading(title: str) -> list:
    return [
        Spacer(1, 12),
        Paragraph(title.upper(), styles["section"]),
        HRFlowable(
            width="100%",
            thickness=0.65,
            color=RULE,
            spaceBefore=2.8,
            spaceAfter=6,
        ),
    ]


def project(name: str, description: str, technologies: str, repo: str | None = None) -> list:
    name_markup = f"<b>{name}</b>"
    if repo:
        name_markup = link(repo, name_markup, INK)
        name_markup += f' <link href="{repo}" color="{ACCENT.hexval()}"><font size="7.8">GitHub</font></link>'

    return [
        Paragraph(name_markup, styles["project_title"]),
        Spacer(1, 1.8),
        Paragraph(description, styles["body_tight"]),
        Spacer(1, 2),
        Paragraph(
            f'<font color="{MUTED.hexval()}">Technologies:</font> {technologies}',
            styles["project_meta"],
        ),
        Spacer(1, 10),
    ]


def build_resume() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=MARGIN_X,
        rightMargin=MARGIN_X,
        topMargin=MARGIN_TOP,
        bottomMargin=MARGIN_BOTTOM,
        title="Kushal Gowda G. — Resume",
        author=NAME,
        subject="B.Tech Computer Science and Engineering student resume",
        creator="Kushal Gowda G. portfolio resume generator",
    )

    story = [
        Paragraph(NAME, styles["name"]),
        Paragraph(ROLE, styles["role"]),
        Paragraph(f"{UNIVERSITY} | {YEAR}", styles["education_line"]),
        Spacer(1, 6),
        Paragraph(
            " | ".join(
                [
                    link(f"mailto:{EMAIL}", EMAIL),
                    link(LINKEDIN, LINKEDIN_LABEL),
                    link(GITHUB, GITHUB_LABEL),
                ]
            ),
            styles["contact"],
        ),
        HRFlowable(
            width="100%",
            thickness=1.1,
            color=ACCENT,
            spaceBefore=8,
            spaceAfter=0,
        ),
    ]

    story += section_heading("Professional Summary")
    story += [
        Paragraph(
            "Third-year Computer Science and Engineering student at CMR University with an "
            "interest in software development, full-stack web development, and AI-powered "
            "applications. Comfortable working with Python, Java, JavaScript, and React through "
            "coursework and self-directed projects. Motivated to build practical, well-structured "
            "software while continuing to learn modern development tools and practices. Currently "
            "exploring AI-assisted development and clean, usable interfaces.",
            styles["body"],
        )
    ]

    story += section_heading("Education")
    story += [
        Paragraph("<b>B.Tech in Computer Science and Engineering</b>", styles["body"]),
        Paragraph(f"{UNIVERSITY} | Third Year | Ongoing", styles["project_meta"]),
    ]

    story += section_heading("Technical Skills")
    skill_lines = [
        ("Languages", "Python, Java, C, C++, JavaScript"),
        ("Web Development", "HTML, CSS, React"),
        ("Tools &amp; Platforms", "Git, GitHub, Visual Studio Code"),
        ("Hardware", "Arduino, Raspberry Pi"),
        ("AI &amp; Data", "Retrieval-augmented generation (RAG), AI-assisted development"),
    ]
    for index, (label, value) in enumerate(skill_lines):
        story.append(
            Paragraph(
                f"<b>{label}:</b> {value}",
                styles["body_tight"],
            )
        )
        if index < len(skill_lines) - 1:
            story.append(Spacer(1, 2.4))

    story += section_heading("Selected Projects")

    story.append(
        KeepTogether(
            project(
                "AetherOS",
                "A modular AI assistant platform organised around a shared core and independent "
                "capabilities. The architecture keeps individual modules separate so the system can "
                "grow without redesigning the whole application.",
                "AI; modular architecture",
            )
        )
    )

    story.append(
        KeepTogether(
            project(
                "AI Study Material Analyzer",
                "An AI-powered study analysis project that applies retrieval-augmented generation "
                "(RAG), retrieving relevant context first and using it to support analysis of study "
                "material.",
                "RAG; AI",
            )
        )
    )

    story.append(
        KeepTogether(
            project(
                "Smart Expense Splitter",
                "A Java application for dividing shared costs between people, built around the "
                "everyday problem of keeping group expenses clear and fair.",
                "Java",
                "https://github.com/kushalg-21/Smart-Expense-Splitter",
            )
        )
    )

    story.append(
        KeepTogether(
            project(
                "Attendance Marks Analyzer",
                "A Python project that analyses attendance and marks data, bringing two related "
                "academic datasets into a single view.",
                "Python",
                "https://github.com/kushalg-21/Attendance-Marks-Analyzer",
            )
        )
    )

    doc.build(story)


if __name__ == "__main__":
    build_resume()
    print(f"Wrote {OUTPUT}")
