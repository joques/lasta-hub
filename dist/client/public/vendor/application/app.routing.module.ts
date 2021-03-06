import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { LoginComponent } from './login/login.component';
import { ResumeComponent } from './resume-programme/resume-programme.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { StartNeedAnalysisComponent } from './start-need-analysis/start-need-analysis.component';
import { NeedAnalysisConsultationComponent } from './need-analysis-consultation/need-analysis-consultation.component';
import { BosComponent } from './bos/bos.component';
import { SenateComponent } from './senate/senate.component';
import { NeedAnalysisConcludeComponent } from './need-analysis-conclude/need-analysis-conclude.component';
import { PacComponent } from './pac/pac.component';
import { CdcComponent } from './cdc/cdc.component';
import { EndConsultComponent } from './end-consult/end-consult.component';
import { CurriculumDevDraftReviseComponent } from './curriculum-dev-draft-revise/curriculum-dev-draft-revise.component';
import { CurriculumDevDraftSubmitPDUComponent } from './curriculum-dev-draft-submit-pdu/curriculum-dev-draft-submit-pdu.component';
import { CurriculumDevDraftPDUApprovComponent } from './curriculum-dev-draft-pdu-approval/curriculum-dev-draft-pdu-approval.component';
import { CurriculumDevPACStartComponent } from './curriculum-dev-pac-start/curriculum-dev-pac-start.component';
import { CurriculumDevPACConsultComponent } from './curriculum-dev-pac-consult/curriculum-dev-pac-consult.component';
import { TLUCEUQAStartComponent } from './tlu-ceu-qa-start/tlu-ceu-qa-start.component';
import { TLURecommendComponent } from './tlu-recommend/tlu-recommend.component';
import { CEURecommendComponent } from './ceu-recommend/ceu-recommend.component';
import { QARecommendComponent } from './qa-recommend/qa-recommend.component';
import { BosSubmitComponent } from './bos-submit/bos-submit.component';
import { SenateSubmitComponent } from './senate-submit/senate-submit.component';
import { ConsultBenchmarkComponent } from './consult-benchmark/consult-benchmark.component';
import { PacConsultDraftComponent } from './pac-consult-draft/pac-consult-draft.component';
import { PacConsultEndorseComponent } from './pac-consult-endorse/pac-consult-endorse.component';
import { FinalDraftComponent } from './final-draft/final-draft.component';
import { BosSubmitFinalComponent } from './bos-submit-final/bos-submit-final.component';
import { FacultyBosFinalComponent } from './faculty-bos-final/faculty-bos-final.component';
import { SenateSubmitFinalComponent } from './senate-submit-final/senate-submit-final.component';
import { OtherFacultyBosComponent } from './other-faculty-bos/other-faculty-bos.component';
import { FinalSenateRecommendComponent } from './final-senate-recommend/final-senate-recommend.component';
import { NqaPreparationComponent } from './nqa-preparation/nqa-preparation.component';
import { PduRecommendComponent } from './pdu-recommend/pdu-recommend.component';
import { NQARecommendComponent } from './nqa-recommend/nqa-recommend.component';
import { NQARegComponent } from './nqa-reg/nqa-reg.component';
import { NqaSubmitComponent } from './nqa-submit/nqa-submit.component';
import { ApcRecommendComponent } from './apc-recommend/apc-recommend.component';
import { PDUStaffComponent } from './pdu-staff/pdu-staff.component';
import { COLLRecommendComponent } from './coll-recommend/coll-recommend.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'notifications', component: NotificationComponent },
    { path: 'StartNeedAnalysis', component: StartNeedAnalysisComponent },
    { path: 'tutorials', component: TutorialComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'NeedAnalysisConsult', component: NeedAnalysisConsultationComponent },
    { path: 'NeedAnalysisConclude', component: NeedAnalysisConcludeComponent },
    { path: 'bos', component: BosComponent },
    { path: 'senate', component: SenateComponent },
    { path: 'pac', component: PacComponent },
    { path: 'cdc', component: CdcComponent },
    { path: 'endconsult', component: EndConsultComponent },
    { path: 'bossubmit', component: BosSubmitComponent },
    { path: 'senatesubmit', component: SenateSubmitComponent },
    { path: 'curriculum-Revise', component: CurriculumDevDraftReviseComponent },
    { path: 'curriculum-dev-draft-submit-pdu', component: CurriculumDevDraftSubmitPDUComponent },
    { path: 'curriculum-dev-draft-pdu-approval', component: CurriculumDevDraftPDUApprovComponent },
    { path: 'curriculum-dev-pac-start', component: CurriculumDevPACStartComponent },
    { path: 'curriculum-dev-pac-consult', component: CurriculumDevPACConsultComponent },
    { path: 'consult-benchmark',component: ConsultBenchmarkComponent },
    { path: 'pac-consult-draft',component:PacConsultDraftComponent },
    { path: 'pac-consult-endorse',component:PacConsultEndorseComponent },
    { path: 'tlu-ceu-qa-start',component:TLUCEUQAStartComponent },
    { path: 'tlu-recommend',component:TLURecommendComponent },
    { path: 'ceu-recommend',component:CEURecommendComponent },
    { path:'coll-recommend',component:COLLRecommendComponent},
    { path: 'qa-recommend',component:QARecommendComponent },
    { path: 'final-draft', component:FinalDraftComponent},
    { path: 'bos-submit-final', component:BosSubmitFinalComponent},
    { path: 'faculty-bos-final',component:FacultyBosFinalComponent},
    { path: 'senate-submit-final', component:SenateSubmitFinalComponent},
    { path: 'other-faculty-bos', component:OtherFacultyBosComponent},
    { path: 'final-senate-recommend', component:FinalSenateRecommendComponent},
    { path: 'nqa-preparation', component:NqaPreparationComponent},
    { path: 'pdu-recommend',component:PduRecommendComponent},
    { path: 'nqa-recommend',component:NQARecommendComponent},
    { path: 'coll-recommend',component:COLLRecommendComponent},
    { path: 'nqa-reg',component:NQARegComponent},
    { path: 'nqa-submit',component:NqaSubmitComponent},
    { path:'apc-recommend',component:ApcRecommendComponent},
    { path:'pdu-staff',component:PDUStaffComponent},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
