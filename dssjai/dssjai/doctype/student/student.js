// Copyright (c) 2024, Jaison Jose and contributors
// For license information, please see license.txt

// When Student Doctype Refreshed, the following message will appear

frappe.ui.form.on("Student", {
	refresh(frm) {
        console.log("Student Doctype Refreshed")
	},
    setup(frm) {
        console.log("Student Doctype Created first time")
    },
    before_load(frm) {
        console.log("Student Doctype Before Loading")
    },
    onload(frm){
        console.log("Student Doctype onload")
    },
    onload_post_render(frm){
        console.log("Student Doctype form is loaded after refreshed")
    },
    validate(frm){
        console.log("Student Doctype will validate like any mandatory fields are pending..") 
    },
    before_save(frm){
        console.log("Student Doctype form is before saving status")
    },
    after_save(frm){
        console.log("Student Doctype after saved ")
    },
    before_submit(frm){
        console.log("Student Doctype form is before submit")
    },
    on_submit(frm){
        console.log("Student Doctype on submit")
    },
    before_cancel(frm){
        console.log("Student Doctype form is before cancel")
    },
    after_cancel(frm){
        console.log("Student Doctype after Cancelled")
    }
 });
