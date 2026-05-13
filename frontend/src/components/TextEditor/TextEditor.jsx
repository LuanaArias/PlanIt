import { useEditor, EditorContent } from "@tiptap/react";
import { useEffect } from "react";
import FontFamily from "@tiptap/extension-font-family";
import { FontSize } from "./extensions.js";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";

import './TextEditor.css';
import { AlignRight } from "../ui/BotonesEditor/AlignRight.jsx";
import { AlignCenter } from "../ui/BotonesEditor/AlignCenter.jsx";
import { AlignLeft } from "../ui/BotonesEditor/AlignLeft.jsx";
import { IconImage } from "../ui/BotonesEditor/IconImage.jsx";
import { IconVideo } from "../ui/BotonesEditor/IconVideo.jsx";

export function TextEditor({ content, onChange }) {

    const editor = useEditor({

        extensions: [

            StarterKit.configure({
                underline: false,
            }),

            Underline,

            TextStyle,

            FontSize,

            FontFamily,

            Color,

            Image,

            Youtube.configure({
                controls: true,
                nocookie: true,
            }),

            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),

            Placeholder.configure({
                placeholder: "Escribí la descripción de tu tarea...",
            }),

        ],

        content: content || "",

        editorProps: {
            attributes: {
                class: "tiptap-editor",
            },
        },

        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },

    });

    useEffect(() => {
        if (editor && content !== editor.getHTML()) {
            editor.commands.setContent(content || "");
        }
    }, [content, editor]);

    if (!editor) {
        return null;
    }

    return (
        <div className="editor-container">

            {/* TOOLBAR */}

            <div className="editor-toolbar">

                {/* BOLD */}

                <button
                    type="button"
                    className={editor.isActive("bold") ? "is-active" : ""}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                >
                    <strong>B</strong>
                </button>

                {/* ITALIC */}

                <button
                    type="button"
                    className={editor.isActive("italic") ? "is-active" : ""}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                    <i>I</i>
                </button>

                {/* UNDERLINE */}

                <button
                    type="button"
                    className={editor.isActive("underline") ? "is-active" : ""}
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                >
                    <u>U</u>
                </button>

                {/* BULLET LIST */}

                <button
                    type="button"
                    className={editor.isActive("bulletList") ? "is-active" : ""}
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                >
                    •
                </button>

                {/* ALIGN LEFT */}

                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().setTextAlign("left").run()
                    }
                >
                    <AlignLeft />
                </button>

                {/* ALIGN CENTER */}

                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().setTextAlign("center").run()
                    }
                >
                    <AlignCenter />
                </button>

                {/* ALIGN RIGHT */}

                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().setTextAlign("right").run()
                    }
                >
                    <AlignRight />
                </button>

                {/* FONT SIZE */}

                <select
                    className="editor-select"
                    onChange={(e) => {
                        editor.chain().focus().setFontSize(e.target.value).run()
                    }}
                >
                    <option value="">Tamaño</option>
                    <option value="14px">14</option>
                    <option value="16px">16</option>
                    <option value="18px">18</option>
                    <option value="24px">24</option>
                    <option value="32px">32</option>
                </select>

                {/* FONT FAMILY */}

                <select
                    className="editor-select"
                    onChange={(e) => {
                        editor.chain().focus().setFontFamily(e.target.value).run()
                    }}
                >
                    <option value="">Fuente</option>
                    <option value="Inter">Inter</option>
                    <option value="Arial">Arial</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Courier New">Courier</option>
                </select>

                {/* COLOR */}

                <input
                    type="color"
                    className="color-picker"
                    onInput={(event) =>
                        editor
                            .chain()
                            .focus()
                            .setColor(event.target.value)
                            .run()
                    }
                    value={
                        editor.getAttributes("textStyle").color || "#ffffff"
                    }
                />

                {/* IMAGE */}

                <button
                    type="button"
                    onClick={() => {
                        const url = window.prompt("URL de la imagen");

                        if (url) {
                            editor.chain().focus().setImage({ src: url }).run();
                        }
                    }}
                >
                    <IconImage />
                </button>

                {/* YOUTUBE */}

                <button
                    type="button"
                    onClick={() => {
                        const url = window.prompt("URL de YouTube");

                        if (url) {
                            editor.commands.setYoutubeVideo({
                                src: url,
                                width: 640,
                                height: 360,
                            });
                        }
                    }}
                >
                    <IconVideo />
                </button>

            </div>

            {/* EDITOR */}

            <EditorContent editor={editor} />

        </div>
    );
}