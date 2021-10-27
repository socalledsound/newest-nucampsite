
import { selectFeaturedCampsiteData, selectCampsitesData } from '../campsites/campsitesSlice'
import { selectFeaturedPromotionData, selectPromotionsData } from '../promotions/promotionsSlice'
import { selectFeaturedPartnerData, selectPartnersData} from '../partners/partnersSlice'

// export default function useSelectAnimation(defaultMode){

//     let items = []
//     if(defaultMode){
//         const campsites = useSelector(selectAllCampsiteData)
//         const promotions = useSelector(selectAllPromotionData)
//         const partners = useSelector(selectAllPartnerData) 
        
//         items = [campsites, promotions, partners]
//     } 

//     return ({
//         options: [true, false, false],
//         toggleAnimation : () => 'hi'
//     })
// }

export const selectFeaturedItems = (state) => {
    const campsites = selectFeaturedCampsiteData(state)
    const promotions = selectFeaturedPromotionData(state)
    const partners = selectFeaturedPartnerData(state) 
    
    return [campsites, promotions, partners]
}

export const selectItems = (state) => {
    const campsites = selectCampsitesData(state)
    const promotions = selectPromotionsData(state)
    const partners = selectPartnersData(state) 
    
    return [campsites, promotions, partners]
}

// export const selectFeaturedItems = (state) => {
//     const campsites = (state) => selectFeaturedCampsiteData(state)
//     const promotions = (state) => selectFeaturedPromotionData(state)
//     const partners = (state) => selectFeaturedPartnerData(state) 
    
//     return [campsites(state), promotions(state), partners(state)]
// }
