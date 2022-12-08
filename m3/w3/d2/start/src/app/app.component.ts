import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'reactiveForm_A';

    generi = ['uomo','donna'];
    form!: FormGroup;
    usernameProibiti = ['Mario','Maria'];

    constructor(private fb: FormBuilder) {}

    validUsername = (formC: FormControl) => {
        if (this.usernameProibiti.includes(formC.value)) {
            return {'usernameProibito': true};
        } else {
            return null;
        }
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.form = this.fb.group({
            userInfo: this.fb.group({
                username: this.fb.control(null, [Validators.required, this.validUsername]),
                email: this.fb.control(null, [Validators.required, Validators.email]),
            }),
            genere: this.fb.control('donna'),
            sports: this.fb.array([])
        });

        this.form.valueChanges.subscribe(value => {
            console.log(value);
        });
    }

    getErrorsC(name: string, error: string) {
        return this.form.get(name)?.errors![error];
    }

    getFormC(name: string) {
        return this.form.get(name);
    }

    getSportsF() {
        return (this.form.get('sports') as FormArray).controls;
    }

    addSports() {
        const control = this.fb.control(null);
        (this.form.get('sports') as FormArray).push(control);
    }

    submit() {
        console.log(this.form);
        console.log('Form correttamente inviato');
        this.form.reset();
    }
}
